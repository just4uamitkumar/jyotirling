import CustomDialog from "@/components/common/Dialog";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface Props {
    openModal: boolean;
    closeModal?: () => void;
    handleCreate: ( event: React.KeyboardEvent | React.MouseEvent) => void;
}

const CreateModal: React.FC<Props> = ({ openModal, closeModal, handleCreate }) => {
 
    return (
        <>
            <CustomDialog
                title={"Confirm Add Jyotirling"}
                dialogClass="confirm-dialog"
                open={openModal}
                onCancel={closeModal}
                onConfirm={handleCreate}
                confirmText={"Yes, Add"}
                cancelText={"No"}
                confirmBtnClass={"primary-btn"}
                cancelBtnClass={"cancel-btn"}
                isCancelIcon={true}
                contentClass="dialog-content"
                maxWidth={'lg'}
            >
                <Grid size={12}>
                    <Stack>
                    {'Are you sure you want to add ?'}
                    </Stack>
                </Grid>
            </CustomDialog>
        </>
    );
};

export default CreateModal;