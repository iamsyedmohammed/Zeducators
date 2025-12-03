import Skeleton from './Skeleton'

export default function PageLoader() {
    return (
        <div className="container" style={{ padding: '120px 20px 60px' }}>
            <Skeleton width="100%" height="300px" borderRadius="24px" style={{ marginBottom: '40px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <Skeleton height="200px" borderRadius="16px" />
                <Skeleton height="200px" borderRadius="16px" />
                <Skeleton height="200px" borderRadius="16px" />
            </div>
        </div>
    )
}
