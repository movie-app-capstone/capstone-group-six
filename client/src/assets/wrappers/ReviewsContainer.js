import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    background-color: #f9f9f9;

    .main-icon {
        font-size: 2rem;
        margin-bottom: 10px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .content-center {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 20px;
    }

    .actions {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

export default Wrapper;