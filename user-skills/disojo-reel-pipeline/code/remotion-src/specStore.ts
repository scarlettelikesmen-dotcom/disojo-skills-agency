// The comps read their spec through this proxy so one codebase renders any job (public/jobs/<job>/spec.json) with --props='{"job":"name"}'.
export const S: { spec: any; job: string } = { spec: {}, job: "" };
export const specProxy: any = new Proxy({}, { get: (_t, k) => (S.spec ? S.spec[k as string] : undefined), has: (_t, k) => !!S.spec && k in S.spec });
export const jobFile = (name: string) => `jobs/${S.job}/${name}`;
