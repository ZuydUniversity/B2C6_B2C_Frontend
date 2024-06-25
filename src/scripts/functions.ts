export const closePatientForm = (): void => {
    const modal = document.querySelector('.modal') as HTMLElement;
    modal.style.display = 'none';
};