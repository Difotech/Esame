import { 
    Keypair, 
    Connection, 
    LAMPORTS_PER_SOL 
} from "@solana/web3.js";


const wallet=[252,50,243,174,0,96,117,246,29,243,230,164,90,94,168,227,63,80,181,246,83,174,6,68,167,63,19,170,130,111,206,111,226,141,187,4,89,86,192,92,39,166,90,189,29,180,230,29,247,132,50,179,26,206,120,110,198,233,219,74,253,0,175,147];
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));


const connection = new Connection("https://api.devnet.solana.com", "finalized");


(async () => {
    try {
        
       
        const airdropSignature = await connection.requestAirdrop(
            keypair.publicKey,     
            1 * LAMPORTS_PER_SOL    
        );

       
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    } catch (error) {
        console.error(error);
    }
})();

