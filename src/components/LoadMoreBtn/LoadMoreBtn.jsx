import css from './LoadMoreBtn.module.css'

function LoadMoreBtn({onLoadMore}) {
    return (
        <button className={css.btnLoad} onClick={onLoadMore}>Load more</button>
    )
}

export default LoadMoreBtn