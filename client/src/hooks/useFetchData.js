// THIS HOOK DOES NOT WORK

// // four endpoints, all-expense, delete-expense, create-expense, summary
// import { useEffect, useState } from "react"
// export const useFetchData = ({ param, body, id }) => {
//     const [response, setResponse] = useState(null)
//     useEffect(() => {
//         const createExpense = async () => {
//         try {
//             const response = await fetch('/api/create-expense', {
//                 method: "POST",
//                 body: JSON.stringify(body),
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             if (response.ok) {
//                 const data = await response.json()
//                 setResponse(data)
//             }
//         } catch (error) {
//             console.log("error in creating expense", error)
//         }
//     }
//     const deleteExpense = async () => {
//         try {
//             const response = await fetch(`/api/delete-expense/${id}`, {
//                 method: "DELETE",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             if (response.ok) {
//                 const data = await response.json()
//                 setResponse(data)
//             }
//         } catch (error) {
//             console.log("error in creating expense", error)
//         }
//     }

//     const allExpense = async () => {
//         try {
//             const response = await fetch('/api/all-expense', {
//                 method: "GET",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             if (response.ok) {
//                 const data = await response.json()
//                 setResponse(data)
//             }
//         } catch (error) {
//             console.log("error in creating expense", error)
//         }
//     }

//     const summary = async () => {
//         try {
//             const response = await fetch('/api/summary', {
//                 method: "GET",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             if (response.ok) {
//                 const data = await response.json()
//                 setResponse(data)
//             }
//         } catch (error) {
//             console.log("error in creating expense", error)
//         }
//     }

//     switch (param) {
//         case "createExpense":
//             createExpense()
//             break
//         case "allExpense":
//             allExpense()
//             break
//         case "deleteExpense":
//             deleteExpense()
//             break
//         case "summary":
//             summary()
//             break
//     }
//     }, [param, body, id])
//     return response
// }

