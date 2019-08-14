import React from 'react'
import HeaderDialog from "components/Molecules/Dialog/HeaderDialog";
import BodyDialog from "components/Molecules/Dialog/BodyDialog";
import FooterDialog from "components/Molecules/Dialog/FooterDialog";

const Dialog = props => {

    let content;

    switch (props.variant) {
        case "offer":
            content = [
                <HeaderDialog
                    variant="offer"
                    imageButton={props.imageButton}
                    labelButton={props.labelButton}
                    titlePosition={props.titlePosition}
                    subTitlePosition={props.subTitlePosition}
                    location={props.location}
                    salary={props.salary}
                    offer={props.offer}
                />,
                <BodyDialog
                    variant="offer"
                    body={props.body}
                />,
                <FooterDialog
                    variant="offer"
                    onSubmit={props.handleSubmit}
                    onClose={props.handleClose}
                />
            ];
            break;
        case "successOffer":
            content = [
                <BodyDialog
                    variant="successOffer"
                    body={body}
                />,
                <FooterDialog
                    variant="successOffer"
                    onClose={props.handleClose}
                />
            ];
            break;
        case "formOffer":
            content = [
                <HeaderDialog
                    variant="formOffer"
                />,
                <BodyDialog
                    variant="formOffer"
                    inputHandler={props.inputHandler}
                    selectHandler={props.selectHandler}
                    name={props.name}
                    passport={props.passport}
                    email={props.email}
                    phone={props.phone}
                    englishLevel={props.levelEnglish}
                    itemsEnglish={props.itemsEnglish}
                    cv={props.cv}
                />,
                <FooterDialog
                    variant="formOffer"
                    inputHandler={props.inputHandler}
                    onSubmit={props.handleSubmit}
                    onClose={props.handleClose}
                />
            ]
        default:
            break;
    }

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            {content}
        </Dialog>
    )
}

export default Dialog;