function pacificAtlantic(heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pacific = Array(m).fill(0).map(() => Array(n).fill(false));
    const atlantic = Array(m).fill(0).map(() => Array(n).fill(false));

    function dfs(i, j, visited) {
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j]) return;
        visited[i][j] = true;
        dfs(i - 1, j, visited);
        dfs(i + 1, j, visited);
        dfs(i, j - 1, visited);
        dfs(i, j + 1, visited);
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
        dfs(i, n - 1, atlantic);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific);
        dfs(m - 1, j, atlantic);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                heights[i][j] = 1;
            }
        }
    }

    return heights;
}
