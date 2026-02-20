import { useState } from "react"

const inputWrapperStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
}

const inputStyles = {
    width: "200px"
}

const ExpenseForm = ({setFormData, handleSubmitForm}) => {
    const handleChange = (e) => {
    setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}
    return (
        <form onSubmit={handleSubmitForm} style={{
            display: "flex",
            padding: "20px 0px",
            flexDirection: "column",
            gap: "10px",
            maxWidth: '400px'
        }}>
            <div style={{...inputWrapperStyles}}>
                <label>Amount</label>
                <input type="number" name="amt" style={{...inputStyles}} onChange={handleChange}/>
            </div>
            <div style={{...inputWrapperStyles}}>
                <label>Category</label>
                <select style={{...inputStyles}} name="category" onChange={handleChange}>
                    <option value="" disabled>Select</option>
                    <option value="shopping">Shopping</option>
                    <option value="groceries">Groceries</option>
                    <option value="clothes">Clothes</option>
                    <option value="utilities">Utilities</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div style={{...inputWrapperStyles}}>
                <label>Date</label>
                <input style={{...inputStyles}} name="date" type="date"  onChange={handleChange}/>
            </div>
            <div style={{...inputWrapperStyles}}>
                <label>Note</label>
                <textarea style={{...inputStyles}} name="note" rows={5} cols={30}  onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}

export default ExpenseForm