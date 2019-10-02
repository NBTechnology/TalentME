import React from "react";
import HeaderDialog from "components/Molecules/Dialog/HeaderDialog";
import BodyDialog from "components/Molecules/Dialog/BodyDialog";
import FooterDialog from "components/Molecules/Dialog/FooterDialog";
import { Dialog } from "@material-ui/core";

const DialogComponent = props => {
  let content;

  switch (props.variant) {
    case "offer":
      content = [
        <HeaderDialog variant="offer" {...props.offerSelected} />,
        <BodyDialog
          variant="offer"
          body={props.offerSelected.description}
          moreInfo={props.offerSelected.moreInfo}
        />,
        <FooterDialog
          variant="offer"
          onSubmit={props.handleSubmitOffer}
          onClose={props.handleClose}
        />
      ];
      break;
    case "successOffer":
      content = [
        <BodyDialog variant="successOffer" body={props.body} />,
        <FooterDialog variant="successOffer" onClose={props.handleClose} />
      ];
      break;
    case "formOffer":
      content = [
        <HeaderDialog variant="formOffer" />,
        <BodyDialog
          variant="formOffer"
          inputHandler={props.inputHandler}
          selectHandler={props.selectHandler}
          name={props.name}
          passport={props.passport}
          email={props.email}
          phone={props.phone}
          levelEnglish={props.levelEnglish}
          itemsEnglish={props.itemsEnglish}
          cv={props.cv}
        />,
        <FooterDialog
          variant="formOffer"
          handleChangePolity={props.handleChangePolity}
          checkPolity={props.checkPolity}
          onSubmit={props.handleSubmitFormOffer}
          onClose={props.handleClose}
        />
      ];
      break;
    default:
      content = "sads";
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
  );
};

export default DialogComponent;
