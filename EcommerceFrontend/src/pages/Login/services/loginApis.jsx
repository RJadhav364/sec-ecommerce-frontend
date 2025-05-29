const loginCustomerDetail = async(requestedLogincredentials) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`http://localhost:9000/customer/customer-login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Ensure the Content-Type is set to application/json
                // "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(requestedLogincredentials)
        });
        return response
        // return data;
        } catch(error){
            console.log(error);
            throw error;
        }
}

export {loginCustomerDetail}