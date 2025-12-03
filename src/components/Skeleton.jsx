import './Skeleton.css'

export default function Skeleton({ width, height, borderRadius, className = '', style = {} }) {
    const styles = {
        width,
        height,
        borderRadius,
        ...style
    }

    return (
        <div className={`skeleton ${className}`} style={styles}></div>
    )
}
