export default class GetUserDto {
  from?: string;

  to?: string;

  limit?: string;

  public static buildQuery(data: GetUserDto) {
    const query: any = { log: {} };

    if (data.from) {
      query.log.date = { $gte: new Date(data.from), $lte: new Date(data.to || data.from) };
    }

    if (data.limit) {
      query.log.$slice = Number(data.limit);
    }

    return query;
  }
}
