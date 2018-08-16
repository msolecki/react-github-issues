import axios from 'axios'

export default class GithubClient {
  constructor (repositoryOwner, repositoryName) {
    this.client = axios.create({
      baseURL: `https://api.github.com/repos/${repositoryOwner}/${repositoryName}`
    })
  }

  getIssues = async () => {
    const response = await this.client.get('/issues?state=all&sort=updated')

    return response.data.map(issue => ({
      id: issue.id,
      title: issue.title,
      state: issue.state,
      createdAt: (new Date(issue.created_at)).toDateString(),
      description: issue.body,
      user: {
        login: issue.user.login,
        url: issue.user.url,
        avatar: issue.user.avatar_url
      }
    }))
  }
}
