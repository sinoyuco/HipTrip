export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal,booking) => ({
    type: OPEN_MODAL,
    modal,
    booking
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});