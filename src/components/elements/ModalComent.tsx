import React from 'react'
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Link, Textarea, useDisclosure } from '@nextui-org/react';
import { BiCommentDetail } from "react-icons/bi";


export const ModalComent = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Link href="#" onPress={onOpen} color="foreground"><BiCommentDetail /></Link>

      <Modal isOpen={isOpen} size='2xl' backdrop="blur" placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Añadir comentario</ModalHeader>
              <ModalBody>
                <Textarea
                  variant="bordered"
                  placeholder="Comentario"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="warning" onPress={onClose}>
                  Añadir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
