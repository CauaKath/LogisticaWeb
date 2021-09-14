import styled from "styled-components";

export const Container = styled.div`
    padding: 4vh;
    padding-top: 2vh;
    padding-bottom: 2vh;

    a {
        margin-top: 20px;
        color: #fff;
        font-size: 20px;
    }
`;

export const Box = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2vh;
    div {
        width: 10vw;
        padding: 2vh;
        margin-left: 1vw;
        margin-right: 1vw;
        box-shadow: 0px 0px 1px 1px #fff;
        border-radius: 0.8vh;
        text-align: center;
        transition: all 0.1s;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            box-shadow: 0px 0px 1px 2px #228B22;
        }
    }
`;