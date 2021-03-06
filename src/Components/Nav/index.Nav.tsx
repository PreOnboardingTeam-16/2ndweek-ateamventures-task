import React, { useState } from "react";
import * as S from "Components/Nav/style.Nav";

function Nav(): JSX.Element {
    const [isPopup, setIsPopUp] = useState<boolean>(false);
    const handleOnClick = ():void => {
        setIsPopUp(!isPopup);
    }

    return(
        <S.NavWarpper>
            <S.Nav>
                <S.Menu onClick={()=>handleOnClick()}/>
                <S.Logo/>
                <S.UserInfo>
                    <S.UserIcon/>
                    <S.UserName>A 가공 업체</S.UserName>
                    <S.Logout>로그아웃</S.Logout>
                </S.UserInfo>
            </S.Nav>
            <S.PopupBackground isPopup={isPopup} onClick={()=> handleOnClick()}/>
            <S.Popup isPopup={isPopup}>
                <S.PopupHeader>
                    <S.ColorLogo/>
                </S.PopupHeader>
                <S.PopupUserInfo>
                    <S.PopupUserIcon/>
                    파트너정밀가공
                </S.PopupUserInfo>
                <S.PopupLogout>
                    로그아웃
                </S.PopupLogout>
            </S.Popup>
        </S.NavWarpper>
    )
}

export default Nav