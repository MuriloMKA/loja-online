import "./App.css"

const simpleButton = ({ text, onClick, disable }) => {
    return (
        <button onClick={onClick} disabled={disable} className="button">
            {text}
        </button>
    )
}

export default simpleButton;