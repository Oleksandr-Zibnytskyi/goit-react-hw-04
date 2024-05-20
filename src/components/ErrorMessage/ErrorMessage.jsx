import css from './ErrorMessage.module.css';

export default function ErrorMessage () {

return (
<p className={css.ErrorMessage}>Oops! Something went wrong! Please reload the page!</p>
);
}