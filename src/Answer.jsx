
export const Answer = ({onResponse}) => {
    const onChange = event => {
        onResponse(event.target.value)
    }
    return <div className="answerContainer">
        <input className="answer" type='text' onChange={onChange} />
    </div>
}
