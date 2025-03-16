

const MyComponent: React.FC = ({ isHighlighted, componentId }) => {

    return (
        <>
            <h2 
                style={{ backgroundColor: isHighlighted ? 'yellow' : 'inherit' }}
            >
                Component Instance { componentId }
            </h2>
        </>
    );
};

export default MyComponent;