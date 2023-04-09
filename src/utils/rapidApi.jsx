const getPincodeFromLatLon = async (lat , lng) => {
    return await getFromNom(lat,lng);
}

const getFromNom = async (lat , lng) => {
    let filteredPincodes = undefined;
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    let pincodes = undefined;
    let pc =0
    await fetch(url)
    .then(response => response.json())
    .then(async data => {
        pc= parseInt(data.address.postcode);
        console.log(pc);
        pincodes = await getFromRapid(pc);
        if(!pincodes){
            console.log("No pincodes obtained")
            pincodes = {areas:[{ area :data.address.county,pincode: pc,distance : 0 }] };
        }
        filteredPincodes = pincodes.areas
        .filter(item => Math.floor(item.pincode/1000) === Math.floor(pc/1000))
        .sort((p1, p2) => ((Math.abs(p1.pincode - pc) > Math.abs(p2.pincode -pc)) ? 1 :
                 (Math.abs(p1.pincode -pc) <  Math.abs(p2.pincode -pc )) ? -1 : 0));
    });
    console.log(filteredPincodes,"<= filtered Sorted")
    localStorage.setItem(`lat+${lat}_lon${lng}`, filteredPincodes)
    return (filteredPincodes)
}

const getFromRapid = async (pincode) => {
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '74b2bb7e93msh527654ce72a8ee5p1fcf94jsnc8e71debaa33',
            'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
        }
    };
    let resp = undefined;
    await fetch(`https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${pincode}/nearby?unit=km`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            resp = response
        })
        .catch(err => {
            console.error("Some error occured ", err);
        });
    console.log(resp);
    return resp;
}

export default getPincodeFromLatLon;