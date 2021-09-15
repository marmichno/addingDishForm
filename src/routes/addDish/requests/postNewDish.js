export const postNewDish = async (dishData) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    switch(dishData.type){
        case "pizza":
            delete dishData['spiciness_scale']
            delete dishData['slices_of_bread']
            break;
        case "soup":
            delete dishData['no_of_slices']
            delete dishData['diameter']
            delete dishData['slices_of_bread']
            break;
        case "sandwich":
            delete dishData['no_of_slices']
            delete dishData['diameter']
            delete dishData['spiciness_scale']
            break;
    }

    console.log(dishData);

    const data = JSON.stringify(dishData);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    }

    try{
        const request = await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions);
        const response = request.status;
        if(response === 200){
            return "Dish added succesfully"
        }else{
            return `Something went wrong... http:${response}`
        }
    }catch(error){
        console.log(error.message);
    }
}