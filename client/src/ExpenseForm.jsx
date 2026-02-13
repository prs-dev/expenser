const ExpenseForm = () => {
    return (
        <form style={{
            display: "flex",
            padding: "10px",
            flexDirection: "column",
            gap: "10px"
        }}>
            <div>
                <label>Amount</label>
                <input type="number" />
            </div>
            <div>
                <label>Category</label>
                <select>
                    <option value="" disabled>Select</option>
                    <option value="shopping">Shopping</option>
                    <option value="groceries">Groceries</option>
                    <option value="clothes">Clothes</option>
                    <option value="utilities">Utilities</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label>Date</label>
                <input type="date" />
            </div>
            <div>
                <label>Note</label>
                <textarea name="" id="" rows={5} cols={30} />
            </div>
        </form>
    )
}

export default ExpenseForm