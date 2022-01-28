// GlobalFont.ts
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: "PlayfairDisplayRegular";
        src: url('/fonts/PlayfairDisplay-Regular.woff') format('woff'); 
    }
    @font-face {
        font-family: "PlayfairDisplayBold";
        src: url('/fonts/PlayfairDisplay-Bold.woff') format('woff'); 
    }
    @font-face {
        font-family: "RobotoMonoRegular";
        src: url('/fonts/RobotoMono-Regular.woff') format('woff'); 
    }
`;
