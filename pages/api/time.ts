import type { NextApiRequest, NextApiResponse } from "next";

export type Time = {
    time: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Time>) {
    res.status(200).json({ time: getTime() });
}

function getTime() {
    const date = new Date();

    return `Текущее время с погрешностью в 30 секунд: ${date.getHours()} часов, ${date.getMinutes()} минут, ${date.getSeconds()} секунд`;
}
