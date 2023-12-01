'use client'
import useLoginModal from '@/hooks/useLoginModal'
import React from 'react'
import {useState, useCallback} from 'react'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import useRegiaterModal from '@/hooks/useRegisterModal'

const LoginModal = () => {

    const loginModal = useLoginModal();
    const registerModal = useRegiaterModal();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            //add login

            loginModal.onClose()
            
        } catch (error) {
            console.log(error) 
        } finally {
            setIsLoading(false)
        }

    }, [loginModal])

    const onToggle = useCallback(() => {
        
        registerModal.onOpen();
        loginModal.onClose();

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
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />

        </div>
    )

    const footerContent = (
        <div className='text-center text-white mt-4'>
            <p>No Account?
                <div>  </div>    
            <span onClick={onToggle} className='text-white font-semibold gap-4 cursor-pointer hover:underline'>
                  Create An Account
            </span>
            </p>
            
            
        </div>
    )

  return (
    <Modal 
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel="Sign In"
    onClose={loginModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}


    />
  )
}

export default LoginModal
