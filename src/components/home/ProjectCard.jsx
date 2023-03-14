import React, { useState, useEffect, useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

const ProjectCard = ({ value }) => {
  const { name, description, technologies, live_link, github_url } = value;
  console.log(value);
  return (
    <Col md={6}>
      <Card className='card shadow-lg p-3 mb-5 bg-white rounded'>
        <Card.Body>
          <Card.Title as='h5'>{name || <Skeleton />} </Card.Title>
          <Card.Text>
            {!description ? '' : description || <Skeleton count={3} />}{' '}
          </Card.Text>
          <CardButtons live_link={live_link} github_url={github_url} />
          <hr />
          {technologies ? (
            <Language technologies={technologies} />
          ) : (
            <Skeleton count={3} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ live_link, github_url }) => {
  return (
    <>
      {live_link && (
        <a
          href={live_link}
          target=' _blank'
          className='btn btn-outline-secondary mr-3'
        >
          <svg viewBox='0 0 512 512' width={15} className='mr-2'>
            <path
              fill='currentColor'
              d='M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z'
            ></path>
          </svg>
          Live Link
        </a>
      )}
      {github_url && (
        <a
          href={github_url}
          target=' _blank'
          className='btn btn-outline-secondary'
        >
          <i className='fab fa-github' /> Repo
        </a>
      )}
    </>
  );
};

const Language = ({ technologies }) => {
  return (
    <div className='pb-3 d-flex align-items-start justify-content-start'>
      <div>Technologies: </div>
      <div className=' d-flex flex-wrap align-items-start justify-content-start gap-3'>
        {technologies.length
          ? technologies.map((language) => (
              <div key={language} className='badge badge-light m-1 mr-2'>
                {language}
              </div>
            ))
          : 'technologies yet to be added.'}
      </div>
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState('0 mints');

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at('just now');
      let measurement = hours === 1 ? 'hour' : 'hours';
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const time = new Intl.DateTimeFormat('en-US', options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className='card-text'>
      <a
        href={repo_url + '/stargazers'}
        target=' _blank'
        className='text-dark text-decoration-none'
      >
        <span className='text-dark card-link mr-4'>
          <i className='fab fa-github' /> Stars{' '}
          <span className='badge badge-dark'>{star_count}</span>
        </span>
      </a>
      <small className='text-muted'>Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
