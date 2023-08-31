import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {PlaceholderAPI} from './constants';

type PlaceholderPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchAlbum = async (album: number): Promise<PlaceholderPhoto[]> => {
  const res = await fetch(`${PlaceholderAPI}/albums/${album}/photos`);
  return res.json();
};

const TaskOne = () => {
  const [album, setAlbum] = useState(1);
  const {data} = useQuery(['album', album], () => fetchAlbum(album));

  return (
    <main className="p-8">
      <div className="flex gap-4">
        <aside>
          <ul className="menu bg-base-200 w-56 rounded-box">
            {Array.from({length: 50}).map((_, i) => (
              <li key={i + 1}>
                <button onClick={() => setAlbum(i + 1)}>Album {i + 1}</button>
              </li>
            ))}
          </ul>
        </aside>
        <section>
          <div className="flex flex-wrap gap-2">
            {data?.map(photo => (
              <div
                key={photo.id}
                className="card card-side bg-base-100 shadow-xl invert shrink"
              >
                <img
                  key={photo.id}
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="p-4 flex-1"
                />
                <div className="card-body flex-0">
                  <h2 className="card-title w-60">{photo.title}</h2>
                </div>
              </div>
            )) ?? 'Loading...'}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TaskOne;
