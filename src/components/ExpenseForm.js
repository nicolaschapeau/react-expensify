// Imports
import React from 'react'



// Component
export default class ExpenseForm extends React.Component {
    // State
    state = {
        description: '',
        amount: 0,
        note: ''
    }



    // Methods
    onDescriptionChange = (e) => {
        const description = e.target.value

        this.setState(() => ({ description }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value

        this.setState(() => ({ note }))
    }



    // Render
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}