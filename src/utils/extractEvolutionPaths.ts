interface EvolutionDetail {
  species: { name: string; url: string };
  evolves_to: EvolutionDetail[];
}

interface EvolutionChain {
  chain: EvolutionDetail;
}

// 진화 경로 추출 함수
export function extractEvolutionPaths(chain: EvolutionDetail): string[][] {
  const evolutionPaths: string[][] = [];

  function traverse(node: EvolutionDetail, path: string[]) {
    path.push(node.species.name);

    if (node.evolves_to.length === 0) {
      evolutionPaths.push([...path]); // 경로를 복사해서 저장
    } else {
      node.evolves_to.forEach((evolution) => {
        traverse(evolution, path); // 재귀적으로 다음 진화 경로 탐색
      });
    }

    path.pop();
  }

  traverse(chain, []);
  return evolutionPaths;
}
