import './Popup.css';
export const Popup = (props) => {

    const { task, isOpen } = props;
    return (
        <div className={isOpen ? 'popup popup_opened' : 'popup'}>
            <div className='content'>
                <img className='text' src={task.solution} alt='решение' />
            </div>

        </div>
    )
}