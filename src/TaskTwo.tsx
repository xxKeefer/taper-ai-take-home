import React from 'react';
import {PlaceholderAPI} from './constants';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {useToasts} from './ToastContext';

type PlaceHolderUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

type FlatUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  lat: string;
  lng: string;
  phone: string;
  website: string;
  companyName: string;
  catchPhrase: string;
  bs: string;
};

type NewUser = Omit<FlatUser, 'id'>;

const defaultValues: FlatUser = {
  id: 69420,
  name: 'Daniel Keefer',
  username: 'WebWizard',
  email: 'xxkeefer.code@gmail.com',
  street: '1 example street',
  suite: '3',
  city: 'Somewhere',
  zipcode: '1234',
  lat: '-27.470125',
  lng: '153.021072',
  phone: '0412345678',
  website: 'https://keefer.au/',
  companyName: 'Code Conjurers',
  catchPhrase: 'We turn Problems into Magic',
  bs: ':poop:',
};

const createUser = async (
  user: Omit<PlaceHolderUser, 'id'>
): Promise<PlaceHolderUser[]> => {
  const res = await fetch(`${PlaceholderAPI}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json() as Promise<PlaceHolderUser[]>;
};

const TaskTwo = () => {
  const {addToast} = useToasts();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<NewUser>({defaultValues});

  const create = useMutation<unknown, Error, Omit<PlaceHolderUser, 'id'>>({
    mutationFn: async user => {
      return await createUser(user);
    },
  });

  const mapToPayload = (data: NewUser): Omit<PlaceHolderUser, 'id'> => {
    return {
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
        geo: {
          lat: data.lat,
          lng: data.lng,
        },
      },
      phone: data.phone,
      website: data.website,
      company: {
        name: data.companyName,
        catchPhrase: data.catchPhrase,
        bs: data.bs,
      },
    };
  };

  const onSubmit: SubmitHandler<NewUser> = data =>
    create.mutate(mapToPayload(data), {
      onSuccess: () => addToast('User Created', 'success'),
      onError: ({message}) =>
        addToast(`User Creation Failed: ${message}`, 'error'),
    });

  return (
    <main className="px-16 flex justify-center">
      <form
        className="flex flex-col gap-4 p-8 bg-neutral"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row gap-8">
          <div>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input w-full max-w-xs"
              id="name"
              type="text"
              placeholder="Name"
              {...register('name', {required: true})}
            />
            {errors.name && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
          <div>
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              className="input w-full max-w-xs"
              id="username"
              type="text"
              placeholder="Username"
              {...register('username', {required: true})}
            />
            {errors.username && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input w-full max-w-xs"
              id="email"
              type="text"
              placeholder="Email"
              {...register('email', {required: true})}
            />
            {errors.email && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
          <div>
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              className="input w-full max-w-xs"
              id="phone"
              type="text"
              placeholder="Phone"
              {...register('phone', {required: true})}
            />
            {errors.phone && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <label className="label" htmlFor="street">
              Street
            </label>
            <input
              className="input w-full max-w-xs"
              id="street"
              type="text"
              placeholder="Street"
              {...register('street', {required: true})}
            />
            {errors.street && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
          <div>
            <label className="label" htmlFor="suite">
              Suite
            </label>
            <input
              className="input w-full max-w-xs"
              id="suite"
              type="text"
              placeholder="Suite"
              {...register('suite', {required: true})}
            />
            {errors.suite && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <label className="label" htmlFor="city">
              City
            </label>
            <input
              className="input w-full max-w-xs"
              id="city"
              type="text"
              placeholder="City"
              {...register('city', {required: true})}
            />
            {errors.city && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
          <div>
            <label className="label" htmlFor="zipcode">
              Zipcode
            </label>
            <input
              className="input w-full max-w-xs"
              id="zipcode"
              type="text"
              placeholder="Zipcode"
              {...register('zipcode', {required: true})}
            />
            {errors.zipcode && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            {' '}
            <label className="label" htmlFor="lat">
              Lat
            </label>
            <input
              className="input w-full max-w-xs"
              id="lat"
              type="text"
              placeholder="Lat"
              {...register('lat', {required: true})}
            />
            {errors.lat && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
          <div>
            <label className="label" htmlFor="lng">
              Lng
            </label>
            <input
              className="input w-full max-w-xs"
              id="lng"
              type="text"
              placeholder="Lng"
              {...register('lng', {required: true})}
            />
            {errors.lng && (
              <label className="label ">
                <span className="label-test-alt text-red-600">
                  This field is required
                </span>
              </label>
            )}
          </div>
        </div>

        <input className="btn" type="submit" />
      </form>
    </main>
  );
};

export default TaskTwo;
