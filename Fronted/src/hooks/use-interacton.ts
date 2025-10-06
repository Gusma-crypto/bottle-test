
import toast from "react-hot-toast";
import { wagmiContractConfig } from "@/contractConfig";
import { useReadContract, useWriteContract } from 'wagmi'
// Todo

export default function useInteracton() {
    const { writeContract } = useWriteContract();

    // allBottles
    const {data:allBottles} = useReadContract({
        ...wagmiContractConfig,
        functionName: 'getAllBottles',
    });
    // handleCreateBottle
    const handleCreateBottle = async (ipfsHashs: string[]) => {
        try {
            writeContract({
                ...wagmiContractConfig,
                functionName: "createBottle",
                args: [ipfsHashs],
            })
        } catch (error) {
            console.error("Create Bottle failed:", error);
            toast.error("Create Bottle failed");
        }
    }
    // handleReplyBottle
    const handleReplyBottle = async (id: string, ipfsHashs: string[]) => {
        try {
            writeContract({
                ...wagmiContractConfig,
                functionName: "openAndReplyBottle",
                args: [BigInt(id), ipfsHashs],
            })

        } catch (error) {
            console.error("Reply bottle failed:", error);
            toast.error("Reply bottle failed.");
        }
    }

    return {
        handleCreateBottle,
        handleReplyBottle,
        allBottles
    }
}