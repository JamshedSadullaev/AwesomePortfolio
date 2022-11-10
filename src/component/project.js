import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project({ image, title, desc, jargon, repo, video, deploy, techs }) {
  const repoButton = (repo) => {
    if (repo) {
      return (
        <Button variant='success' href={repo} target='_blank'>
          Repository
        </Button>
      );
    } else {
      return;
    }
  };
  const deployedButton = (deploy) => {
    if (deploy) {
      return (
        <Button variant='success' href={deploy} target='_blank'>
          Deployed Application
        </Button>
      );
    } else {
      return;
    }
  };
  const videoButton = (video) => {
    if (video) {
      return (
        <Button variant='success' href={video} target='_blank'>
          Walkthrough Video
        </Button>
      );
    } else {
      return;
    }
  };

  return (
    <Card bg='dark' text='white'>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>{desc}</Card.Text>
        <Card.Text>
          <b>Technical</b> {jargon}
        </Card.Text>
        <Card.Text>
          <b>Technologies</b> {techs}
        </Card.Text>
        <div className='d-grid gap-2'>
          {repoButton(repo)}
          {deployedButton(deploy)}
          {videoButton(video)}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;