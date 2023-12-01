'use client'
import useLoginModal from '@/hooks/useLoginModal'
import React from 'react'
import {useState, useCallback} from 'react'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import useRegiaterModal from '@/hooks/useRegisterModal'

const RegisterModal = () => {

    const loginModal = useLoginModal();
    const registerModal = useRegiaterModal();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            //add register and login

            registerModal.onClose()
            
        } catch (error) {
            console.log(error) 
        } finally {
            setIsLoading(false)
        }

    }, [loginModal])

    const onToggle = useCallback(() => {
        
        registerModal.onClose();
        loginModal.onOpen();

    },[isLoading, registerModal, loginModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />
            <Input 
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoading}
            />
            <Input 
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}
            />
            <Input 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />

        </div>
        )

        const footerContent = (
            <div className='text-center text-white mt-4'>
                <p >Already have an account?  </p>
                <span onClick={onToggle} className='text-white font-semibold cursor-pointer hover:underline'>
                      Sign In
                </span>
                
                
            </div>






    )
  return (
    <Modal 
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Create An Account"
    actionLabel="Register"
    onClose={registerModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}


    />
  )
}

export default RegisterModal
