import { useEffect, useState } from "react";
import { useTonClient } from "./useTonClient";
import { Address, OpenedContract, toNano } from "@ton/core";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Main } from "../contract/Main";
import { useTonConnect } from "./useTonConnect";


export function useMainContract(){
    const client = useTonClient();
    const { sender } = useTonConnect();
    const sleep = (time: number) => new Promise((reslove) => setTimeout(reslove, time));

    const [ contractData, setContractData ] = useState<null | {
        counter_value: number,
        recet_address: Address,
        owner_address: Address,
    }>();
    const [balance, setBalance ] = useState<null | number>(0);

    const mainContract = useAsyncInitialize( async() => {
        if (!client) return;
        const contract = new Main(
            Address.parse('EQANcoOIJq8Y9LHuHNlEhvWdDf9v6f6-Oz3WGhy8SVsNikeY')
        );
        return client.open(contract) as OpenedContract<Main>;
    }, [client]);

    useEffect(() => {
        async function getValue() {
            if (!mainContract) return;
            setContractData(null);
            const val = await mainContract.getData();
            const { balance } = await mainContract.getBalance();
            setContractData({
                counter_value: val.number,
                recet_address: val.recent_sender,
                owner_address: val.owner_address
            })

            setBalance(balance);
            await sleep(5000);
            getValue();
        }
        getValue();
    }, [mainContract]);

    return {
        contract_address: mainContract?.address.toString(),
        contract_balance: balance,
        ...contractData,
        sendIncrement: async () => {
            mainContract?.sendIncrement(sender, toNano('0.05'), 1)
        },
        sendDeposit: async() => {
            mainContract?.sendDeposit(sender, toNano('1'))
        },
        sendWithdrawalRequest: async() => {
            mainContract?.sendWithDrawRequest(sender, toNano('0.05'), toNano('0.5'))
        }
    }
}