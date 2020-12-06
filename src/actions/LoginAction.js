import axios from 'axios'



export const login = (userdata) => async (dispatch) => {
    try {
        console.log("L")
        await axios.post('http://localhost:5000/login', userdata).then(res => {
            dispatch(
                {
                    type: "LOGIN_SUCCESS",
                    pload: res.data.token
                }
            )
        })
    } catch (error) { console.log(error) }
}