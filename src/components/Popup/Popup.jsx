import './Popup.css';
export const Popup = (props) => {

    const { task, isOpen, onClose } = props;
    return (
        <div className={isOpen ? 'popup popup_opened' : 'popup'}>
            <div className='content'>
                <img className='solution' src={task.solution} alt='решение' />
                <button type="button" className="popup__close-button" onClick={onClose}>закрыть</button>
            </div>

        </div>
    )
}