// icon
import CloseIcon from '../icons/CloseIcon';

import Input from '@/_components/Input';
import Button from '@/_components/Button';

type Props = {
  show: boolean;
  handleCloseModal: () => void;
  handleConfirmButton: () => void;
};

function ConfimationModal({
  show,
  handleCloseModal,
  handleConfirmButton,
}: Props) {
  return (
    <>
      {show && (
        <div className="bg-gray-300 z-1 absolute left-0 top-0 flex h-screen w-screen bg-opacity-50">
          <div className="flex w-full items-center justify-center">
            <div className="min-w-[356px] overflow-auto rounded-md bg-white p-6">
              <div className="flex justify-between">
                <p className="pb-4 text-xl font-medium">Are you sure?</p>
                <CloseIcon onClick={handleCloseModal} />
              </div>
              <div className="flex gap-6">
                <Button label="No" onClick={handleCloseModal} />
                <Button primary label="Yes" onClick={handleConfirmButton} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfimationModal;
