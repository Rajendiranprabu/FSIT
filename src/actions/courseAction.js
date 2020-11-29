import axios from 'axios'


export const getCourses = () =>
    async (dispatch) => {

        try {
            console.log("Actions")
            await axios.get('http://localhost:5000/students')
                .then(res => {
                    dispatch(
                        {
                            type: "GET_COURSES",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }

    }

