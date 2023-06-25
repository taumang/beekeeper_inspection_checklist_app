import React from 'react'
import { useForm } from 'react-hook-form';


export const login_page = () => {
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
    console.log(data); // Replace this with your own logic for authentication
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <div className="mt-1">
        <input
          {...register('email')}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="mt-1">
        <input
          {...register('password')}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Sign In
      </button>
    </div>
  </form>
  )
}

 