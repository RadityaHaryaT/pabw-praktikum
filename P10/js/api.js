const ALAMAT = 'data/daftarGame.json';

export async function ambilGame(){
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    if (!respons.ok){
        throw new Error('status' + respons.status);

    }

    return respons.json();
}
