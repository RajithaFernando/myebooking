// function USER_LOGIN2() {
//     return {
//         type: "USER_LOGIN",
//         payload: {
//             userDetails: {
//                 userName: "Pramuditha Kaushalya",
//                 userEmail: 'pramuditha.kaushalya@gmail.com',
//                 userID: '1',
//                 userType: 'admin'
//             }
//         }
//     }
// }

export const USER_LOGIN = userDetails => ({
    /**
     THIS IS A DOC STRING
     */
    type: "USER_LOGIN",
    payload: {
        userDetails: userDetails
    }
})

export const USER_LOGOUT = () => ({
    /**
     THIS IS A DOC STRING FOR LOGOUT
     */
    type: "USER_LOGOUT",
    payload: null
})

export const SELECT_BUISNESS_CATEGORY = (buisnessCategory) => ({
    /**
     WHEN USER CLICK ON A TYPE OF BUISNESS CATEGORY ON THE FEED
     */
    type: "SELECT_BUISNESS_CATEGORY",
    payload: { buisnessCategory: buisnessCategory }
})


export const SELECT_BUISNESS = (buisnessDetails) =>({
    /**
    WHEN USER CLICK ON SERVICE_CARD COMPONENT, REDIRECT TO THE PATICULAR PAGE 
    OF THAT BUISNESS
     */
    type:"SELECT_BUISNESS",
    payload:{buisnessDetails:buisnessDetails}
})