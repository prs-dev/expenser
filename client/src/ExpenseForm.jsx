const inputWrapperStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
}

const inputStyles = {
    width: "200px"
}

const ExpenseForm = () => {
    return (
        <form style={{
            display: "flex",
            padding: "20px 0px",
            flexDirection: "column",
            gap: "10px",
            maxWidth: '400px'
        }}>
            <div style={{...inputWrapperStyles}}>
                <label>Amount</label>
                <input type="number" style={{...inputStyles}}/>
            </div>
            <div style={{...inputWrapperStyles}}>
                <label>Category</label>
                <select style={{...inputStyles}}>
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
                <input style={{...inputStyles}} type="date" />
            </div>
            <div style={{...inputWrapperStyles}}>
                <label>Note</label>
                <textarea style={{...inputStyles}} name="" id="" rows={5} cols={30} />
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}

export default ExpenseForm