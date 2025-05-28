const createNewCustomer = async(requestedcredentials) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`http://localhost:9000/customer/new-customer`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Ensure the Content-Type is set to application/json
                // "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(requestedcredentials)
        });
        return response
        // return data;
        } catch(error){
            console.log(error);
            throw error;
        }
}

export {createNewCustomer}