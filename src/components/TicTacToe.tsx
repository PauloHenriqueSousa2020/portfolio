// libs
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// components
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

type Player = 'X' | 'O' | null;
type BoardState = Player[];
type WinningLine = [number, number, number] | null;
type WinnerResult = { player: Player; line: [number, number, number] } | null;

export function TicTacToe() {
  const t = useTranslations("TicTacToe");

  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState<boolean>(true);
  const [winningLine, setWinningLine] = useState<WinningLine>(null);

  const handleClick = (index: number): void => {

    if (board[index] || winningLine) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsUserTurn(false);

    const userWinner = calculateWinner(newBoard);

    if (userWinner) {
      setWinningLine(userWinner.line);
      return;
    }

    setTimeout(() => {
      const emptyIndices = newBoard.reduce<number[]>((acc, val, i) => (val === null ? [...acc, i] : acc), []);
      if (emptyIndices.length === 0) return;

      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      newBoard[randomIndex] = 'O';
      setBoard(newBoard);
      setIsUserTurn(true);

      const machineWinner = calculateWinner(newBoard);
      if (machineWinner) {
        setWinningLine(machineWinner.line);
      }
    }, 500);
  };

  const calculateWinner = (squares: BoardState): WinnerResult => {
    const lines: [number, number, number][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { player: squares[a], line };
      }
    }
    return null;
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setWinningLine(null);
  };

  const isDraw: boolean = !winningLine && board.every(Boolean);

  return (
    <Flex
      id={'tictactoe'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}

      position={'relative'}
      mb={20}
      gap={2}
    >
      <Heading
        color={'system'}
        my={[2, 4, 8]}
      >
        {`<${t('header')} />`}
      </Heading>

      <Box my={10} bg={'system'} display="grid" gridTemplateColumns={["repeat(3, 60px)", "repeat(3, 100px)"]} gap={1} justifyContent="center">
        {board.map((value, index) => (
          <Button
            variant={'ghost'}
            key={index}
            borderRadius={'none'}
            w={["60px","100px"]}
            h={["60px","100px"]}
            fontSize={'2xl'}
            onClick={() => handleClick(index)}
            isDisabled={!!value || !isUserTurn || !!winningLine}
            backgroundColor={winningLine?.includes(index) ? 'tic-tac-toe-finish' : 'background'}
            color={'tic-tac-toe-color'}
            _hover={{
              opacity: 0.9,
              backgroundColor: '!transparent'
            }}
            _active={{
              backgroundColor: '!transparent'
            }}
            _disabled={{
              backgroundColor: "!transparent"
            }}
          >
            {value}
          </Button>
        ))}
      </Box>

      <Flex
        visibility={(winningLine || isDraw) ? 'visible' : 'hidden'}
        gap={6}
        alignItems={'center'}
        justifyContent={'center'}
        minH={'80px'}
      >
        {winningLine && <Text mt={4} fontSize="lg">{t("winner")}: {board[winningLine[0]]}</Text>}
        {isDraw && <Text mt={4} fontSize="lg">{t("tie")}!</Text>}
        {(winningLine || isDraw) && <Button mt={4} onClick={resetGame}>{t("reset")}</Button>}
      </Flex>
    </Flex>
  );
}