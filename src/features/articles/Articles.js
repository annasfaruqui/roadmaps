import { useEffect, useState } from "react";
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";

const KEY = "1fd5d7321e70437b9dadb4b2731f18d6";
const TECH_KEYWORD = "technology";

const ArticlesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 40rem 1fr;
  grid-template-rows: repeat(4, auto);
  column-gap: 2rem;

  border: 2px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  padding-right: 1.6rem;
`;

const ArticleImg = styled.img`
  grid-row: 1/-1;
  height: 100%;
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2.8rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.8rem;
  line-height: 1.3;
`;

const Content = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1.8rem;
`;

const LinkEl = styled.a`
  text-decoration: underline;
  color: var(--color-brand-600);

  &:hover {
    color: var(--color-grey-500);
  }
`;

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function loadArticles() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${TECH_KEYWORD}&apiKey=${KEY}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching articles");

        const data = await res.json();
        const articles = data.articles;

        setArticles(articles);
      } catch (err) {
        console.error("😓 Error: ", err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadArticles();
  }, []);

  return (
    <div>
      <Heading as="h1">Tech Articles</Heading>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error message={error} />
      ) : (
        <ArticlesList>
          {articles.map((article, index) => (
            <ListItem key={index + 1}>
              <ArticleImg
                src={article.urlToImage}
                alt={article.title}
              ></ArticleImg>
              <Title>{article.title}</Title>
              <Description>{article.description}</Description>
              <Content>
                {article.content.split(" ").slice(1, -2).join(" ")} &nbsp;
                <span>
                  <LinkEl
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more &rarr;
                  </LinkEl>
                </span>
              </Content>
            </ListItem>
          ))}
        </ArticlesList>
      )}
    </div>
  );
}

export default Articles;
