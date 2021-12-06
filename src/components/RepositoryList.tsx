import React from "react"
import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

// https://api.github.com/users/ManoelRochadev/repos

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RespositoryList() {
const [repositories, setRepositories] = useState<Repository[]>([]);

useEffect(() => {
fetch('https://api.github.com/users/ManoelRochadev/repos')
.then(response => response.json())
.then(data => setRepositories(data))
}, []); // nunca deixar sem segundo parametro

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
        return <RepositoryItem key={repository.name} repository={repository} />
        })
        }
     </ul>
    </section>

  );
}